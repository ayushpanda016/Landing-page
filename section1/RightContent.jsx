
// import 'remixicon/fonts/remixicon.css'
// import RightCard from './RightCard'

// const RightContent = () => {
//   return (
//     <div className='h-full p-6 w-2/3'>
//      <RightCard/>
     

//     </div>
//   )
// }

// export default RightContent


import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  
  return (
     <div id='right' className='h-full p-6 w-2/3 flex flex-nowrap gap-10 overflow-x-auto'>
   
   {props.users.map(function(elem,idx){
    return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro}/>
   })}
    </div>
  )
}

export default RightContent
