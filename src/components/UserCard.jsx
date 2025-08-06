import axios from "axios";
import { BASE_URL } from "../utils/constrants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({user}) => {
    const { _id, firstName, lastName, photoUrl, gender, age, about } = user;
    const dispatch = useDispatch();


    const handleSendREquest = async (status, _id) => {
      try {

        const res = await axios.post(BASE_URL + "/request/send/" +status + "/" + _id,
          {},
          { withCredentials:true }
        );
        dispatch(removeUserFromFeed(_id));

      }
      catch (err){
        //TODO: Handle error case here
      }

    };


  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={user.photoUrl} alt="Photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + " , " + gender}</p>}

        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
            onClick={() => handleSendREquest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendREquest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard