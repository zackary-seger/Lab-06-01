import { useState } from "react";
import { useEffect } from 'react';
import Card from "react-bootstrap/Card";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import _ from 'lodash';

// eslint-disable-next-line no-unused-vars
let item;
// eslint-disable-next-line no-unused-vars
let x = 0;
let savex;
let renderNow;

const Render = () => {

  // These useState variables are functionally no different than setting 
  //
  //      this._anything = { names: { immediateFamilyFirstNames: {['Zak','Rob','Mark'],['Peyton','Natalie']}}};
  //      this._itemsList = ["Movie 01", "Movie 02", "Movie 03"];
  //
  // inside the constructor of a JSX class. You can set your own defaults in the 
  // = useState() section of the statement, inside the parentheses, as seen below. 

  const [itemsList, setItemsList] = useState(["Interstellar", "Space Jam", "Avatar"]);
  const [itemNums, setItemNums] = useState([1,2,1]);
  const [listAppend, setListAppend] = useState();
  const [listNum, setListNum] = useState(3);
  const [edited, setEdited] = useState(false);

  const DeleteItem = (item) => {

    setItemNums(() => { 
                      
      console.log('x:' + x)
      let list =  [...itemNums];
      list[x] = list[x] - 1;
      console.log(list);
      return list;

     });

  setEdited(true);
  setListNum(listNum - 1);
  console.log('\n');
  console.log('finished..');

  }

  const AddItem = (x, item) => {
    setItemNums(() => { 
                      
                        console.log('x:' + x)
                        let list =  [...itemNums];
                        list[x] = list[x] + 1;
                        console.log(list);
                        return list;

                       });
    setEdited(true);
    setListNum(listNum + 1);
    console.log('\n');
    console.log('finished..');

  }
  
  const RenderCard = (props) => {
  
    let item;
    let key;
    let x;
  
    if(props){
      item = props.itemsList || props.item;
      key = props.key;
      x = props.x - 4;
      console.log('props: ' + x)
    }
  
    return (
  
      <div>
        <li key={key} className='d-flex pe-5 ps-2 mb-1'>
            <Card className="d-inline-block w-100">
              <div className='d-flex'>               
                <Card.Body className="d-inline-block"> 
                    {item} (x{itemNums[x]})
                </Card.Body>
              
                <Button onClick={ () => { x = itemNums[x]; item = AddItem(x, item); } } className="me-2 mt-2 mb-2 btn-success btn-outline-dark" id="listAppend">
                ➕
                </Button>
                <Button onClick={ () => { let newKey = item; item = DeleteItem(newKey, item); } } className="me-2 mt-2 mb-2 btn-danger btn-outline-dark" id="listAppend">
                  🗑
                </Button>
                
              </div>
  
            </Card>
        </li>
      </div>  
    ) 
  
  }

  // I like this method here below the most for completing a JSX conditional render 
  // without custom classes. It makes the most sense to me. Plus i think Mr. Smith is a big 
  // lodash guy so it works out haha.. Just checked the docs and lodash is recommended..

  const RenderList = (item) => {

      console.log('RenderList() Function:');
      console.log(itemsList);
      x++;
      console.log(x);
      savex = x;
      if (edited) {       
        x = savex - 1;
      }
      return renderNow = <RenderCard x={x} itemsList={item}/>

  }
  
  return (
  
    <div>
        
    <h1 className="ms-4 pb-3">My Current Cart ({listNum})</h1>
    
    <Form.Group className="mb-3 pe-5">
      <InputGroup className="InputGroup mb-3 ms-2 pe-3">
        <InputGroup.Text id="searchInputTxt">Add Groceries</InputGroup.Text>
          
          <Form.Control
            id="searchBar"
            value={listAppend}
            onChange={(e) => {
              setListAppend(e.target.value);
            }}
            aria-label="search bar"
            aria-describedby="basic-addon1"
          />

        <Button onClick={() => { setItemsList([...itemsList, listAppend]); x++; setListNum(listNum + 1) }} className="" id="listAppend">
          Add
        </Button>

      </InputGroup>
    </Form.Group>

    {
      // Below we have quite possibly, the most important, and confusing line of code on this page. 
      // First, I haven't looked into why, but the _ refers to lodash, and basically everything
      // you could want from it (for now at least..).
      //
      // Now, this is a special .map() function created specifically by lodash. It first takes an array, 
      // or collection, and second a function written without parentheses. The function, is allowed to do
      // anything, however this is one of the allowed options for conditional rerendering with JSX functions.
    }

    <div className="pe-2">
          { itemsList && _.map(itemsList, RenderList) } 
    </div>


  </div>)

}

export default Render;
