
// import RightContent from './RightContent'

import RightCardContent from "./RightCardContent"

// const RightCard = () => {
//   return (
//     <div className='h-full w-80 overflow-hidden relative rounded-3xl'>
     
//      <img className='h-full w-full object-cover ' src="https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="" />

//      <RightContent/>
//     </div>
//   )
// }

// export default RightCard


const RightCard = (props) => {
  return (
    <div className='h-full w-68 shrink-0 overflow-hidden relative rounded-3xl '>
      <img
        className='h-full w-full object-cover opacity-90'
        src={props.img}
        alt=""
      />
      <RightCardContent id={props.id} tag={props.tag} intro={props.intro}/>
    </div>
  )
}

export default RightCard
