import { compose } from "redux";
import {createStore} from 'redux';

const initialData = 
    {products:[
    {pname:"Apple",price:20},
    {pname:"Banana",price:30},
    {pname:"Custard Apple",price:12},
    {pname:"Dosakaya",price:10},
    {pname:"Endrikkaya",price:50}
    ],
    cart:[],
    Total:0
    };

const reducer = function(state=initialData,action){
    return state;
}

const store = createStore(reducer);