import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  let image_arr=imageData()
  console.log(image_arr)
  return (
   <div>
     <h1>Kalvium Gallery</h1>
    {/* <div className='parent'>
      <img src={image_arr[0].img} className='image'/>
      <img src={image_arr[0].img} className='image'/>
      <img src={image_arr[0].img} className='image'/>
      <img src={image_arr[0].img} className='image'/>
    </div> */}
    <div className='parent'>
    {
      image_arr.map(elem=>{
        return(
          <img className='image' src={elem.img}/>
        )
      })
    }

    </div>
   </div>
  )
}

export default App;
