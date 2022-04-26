import CatagoryItem from "../catagory-item/catagory-item.component";
import Catagories from "../catagories/catagories.component"


const Directory = () => {
    return(

        <div className="categories-container">
    {Catagories.map((catagory) => (
        < CatagoryItem key={catagory.id} catagory={catagory} />
        ))}
  </div>
        )
}

export default Directory;