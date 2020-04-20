import React,{PureComponent} from 'react';
import { ListGroupItem, Spinner} from "reactstrap";
import "./NewsItem.css"

class NewsItem extends PureComponent {
  render() {
    let {name,title, date, loading} = this.props;
    let diaryItem = (
    <div className="container">
  
        <ListGroupItem   className=" border-secondary mb-3 row d-flex justify-content-center no-gutters">
          <div class="card-body">
            <h5 class="card-title text-uppercase">{name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{date}</h6>
            <p class="card-text">{title}</p>
            {/* <a href="/edit" class="btn btn-secondary">Переход куда-нибудь</a> */}
          </div>
        </ListGroupItem >
 
         </div>
    );

    if (loading) {
      diaryItem = (
          <div className="d-flex justify-content-center my-2">
            <Spinner type="grow" color="danger" />
          </div>
      );
    }

    return diaryItem;
  }


};

export default NewsItem;
