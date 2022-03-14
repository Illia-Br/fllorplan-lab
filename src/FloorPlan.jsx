import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bath from './Bath';
import Bedroom from './Bedroom';


function FloorPlan() {
  return (
    <div>
      <Bedroom bedNum={1}/>
      <Kitchen />
      <Bath size='Half'/>
      <Bedroom bedNum={2}/>
      <LivingRoom />
      <Bath size='Full'/>
      <Bedroom bedNum={3}/>
    </div>
  );
}

export default FloorPlan