import Router from 'koa-router';
import path from 'path';
import os from 'os';
import busboy from 'async-busboy';
import fs from 'fs';
import Encrypt from '../services/Encrypt';

const upload = new Router({
	prefix: ServerConfig.apiPrefix + '/upload'
})

const uploadPath = path.resolve('assets/upload');

// 上传任意文件
upload.post('/', async (c, next) => {
	if(c.request.is('multipart/*')){
		const {files, fields} = await busboy(c.req);
		const result = await new Promise((resolve, reject) => {
			let distPathObj = []
			let uploadCompleteCount = 0;
			files.length && files.map(item => {
				// 处理文件名
				const ext = item.filename.substr(item.filename.lastIndexOf('.'))
				const distFilename = Encrypt.hash(item.filename + Math.random()) + ext
				const distPath = path.join(uploadPath, distFilename);
				distPathObj.push({
					origin: item.filename,
					dist: '/upload/' + distFilename
				})

				// 开始存储
				console.log('uploading to: =====> ', distPath);
				const stream = fs.createWriteStream(distPath)
				item.on('data', chunk => {
					if(stream.write(chunk) === false) {
						item.pause();
					}
				})
				stream.on('drain', () => {
					item.resume();
				})
				item.on('end', () => {
					stream.end()
					console.log('uploaded complete: ', distPath);
					uploadCompleteCount++

					if(uploadCompleteCount === files.length){

							resolve({
								msg: 'upload completed',
								count: uploadCompleteCount,
								path: distPathObj
							})
							

					} 
				})
			})
		})

		c.ok(result);

	} else {
		c.badRequest({
			msg: 'support multipart formdata only!'
		})
	}
})

// 上传图片
upload.post('/img', () => {})


export default upload.routes();