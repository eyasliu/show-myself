import style from './style.scss';
import Item from './Item';
import {getView} from 'cases/actions/view';

@connect(
  state => ({
    data: state.cases.view.data
  }),
  dispatch => bindActionGroups({getView}, dispatch)
)
export default class ViewContainer extends React.Component{
  constructor(props){
    super();
    props.getView(props.params.id);
  }
  render(){
    return (
      <div className={style.viewContainer}>
        <Item data={this.props.data} />
      </div>
    )
  }
}