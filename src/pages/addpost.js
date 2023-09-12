
//import userState from "../states/atoms.js";
//import {atom, selector, useRecoilState} from 'recoil';

//skapa en sida utan asides med en titel en textaria
//rendera ut users i en scroll lista
//creat a user list from API users
//
//problem med att få globala state att fungera i denna fil, behövs för att rendera ut userlist. 
export function AddPost() {
    
   //const [users, setUser] = useRecoilState(userState);
  // people list fungerar bra men får ej userState att fungera i post. 
  function PeopleList({ users }) {
    return (
      <select>
        {users.map((person, index) => (
          <option value={person} key={index}>{person.firstName}</option>
        ))}
      </select>
    );
  }
  return (
    <section className="add-post-section">
    
      <label for="usernames">Choose a user:</label>
      {/*<PeopleList users={users}/>*/}
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

      <textarea placeholder="Text(optional) Max 60 tecken" />
      <button>Save Draft</button>
      <button>Post</button>
    </section>
  );
}
