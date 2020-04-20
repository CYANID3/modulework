import React,{PureComponent} from 'react';
import {Button, ListGroupItem, Spinner} from "reactstrap";
import {Link} from "react-router-dom";
import Pencil from  "../../../assets/img/pencil.png";
import Del from  "../../../assets/img/del.png";
import "./DiaryItem.css";

class DiaryItem extends PureComponent {
  render() {
    let {title, name, date, remove, loading, id} = this.props;
    let diaryItem = (
      <div className="container">
        <ListGroupItem className="row border-secondary mb-3  d-flex justify-content-center no-gutters align-top">
          <div className="col-md-2 text-uppercase">{name}</div>
          <div className="col-md-4">{title}</div>
          <div className="col-md-3 text-center">{date}</div>
          <div className="col-md-1">
    <Link to={`/edit/${id}`} className="btn  btn-sm"><img className="Pencil" src={Pencil} alt="2"/></Link>
          </div>
          <div className="col-sm-1">
            <Button className="DelButton" onClick={remove}><img className="Del" src={Del} alt="2"/></Button>
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

export default DiaryItem;
