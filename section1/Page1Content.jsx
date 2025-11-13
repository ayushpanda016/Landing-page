
import Leftcontent from './Leftcontent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  console.log(props);
  
  return (
    <div className='pb-15 pt-4 flex gap-10 items-center h-[90vh] px-20 '>
      <Leftcontent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
