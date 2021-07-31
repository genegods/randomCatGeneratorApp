import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import catImage from '../../asserts/images/tryCat.jpg'
import { loadData } from '../../redux/catRedux/cat.actions'
import { CAT_KEY } from '../../redux/catRedux/cat.reducer'

const CatApp = () => {

// initialize dispatch
let dispatch = useDispatch()

useEffect(() =>{
    dispatch(loadData())

}, [])


// view data from store
let viewCat = useSelector((state) =>{
    return state[CAT_KEY]
})


// handle button click
let handleBtn = () =>{
    dispatch(loadData())

}




    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(viewCat)}</pre> */}
           <div className='card'>
               <div className='card-header'>
                   <h5>RANDOM CAT IMAGE GENERATOR</h5>
               </div>


               {/* body section */}
               <div className='card-body centered'>
                   <div className='catContainer centered'>
                       <div className='imgContainer centered'>
                           {
                               viewCat.data.length === 0? null:
                               <React.Fragment>
                                   {
                                       viewCat.data.map((item) =>{
                                           return(
                                               <div key={item.id}>
                                                    <img src={item.url} alt=''/> 

                                               </div>
                                           )
                                       })
                                   }
                               </React.Fragment>
                           }
                           
                       </div>


                       <div className='btnContainer'>
                           <button className='btns' onClick={handleBtn}>GENERATE</button>
                       </div>
                   </div>
               </div>
           </div>
        </React.Fragment>
            
        
    )
}

export default CatApp
