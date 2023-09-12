
import userState from "../states/atoms.js";
import { useRecoilState} from "recoil";

//skapa en sida utan asides med en titel en textaria
//rendera ut users i en scroll lista
//creat a user list from API users
//

export function AddPost() {
    
    //const [users, setUser] = useRecoilState(userState);
  //creat a user list from API users
  function PeopleList({users}) {

    

  return (
    
      users.map((person, index) => (
        <option key={index}>{person.firstName}</option>
      ))
    
  );
}
  return (
    <section className="add-post-section">
    
      <label for="usernames">Choose a user:</label>
      
      <select name="usernames" id="usernames">
        <option value="malin">Malin</option>
        <option value="isak">Isak</option>
        <option value="simon">Simon</option>
        <option value="philip">Philip</option> 
       
      </select>

      <div>
        <button>Post</button>
        <button>image & video</button>
        <button>Link</button>
        <button>Poll</button>
      </div>

      <input placeholder="Title" />
      <div>
        <button>B</button>
        <button>i</button>
        <button>Q</button>
        <button>S</button>
        <button>C</button>
        <span>markdown mode</span>
      </div>

      <textarea placeholder="Text(optional)" />
    </section>
  );
}
