import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./newemployee.scss";

//--- Function to write new user ---\\
// function writeUserData() {
//   const db = getDatabase();
//   set(ref(db, 'employees/2'), {
//     employeeFirst: "Graham",
//     employeeLast: "Norton",
//     position : "Support Worker"
//   });
// }
//writeUserData();

//--- Function to get single user ---\\
// function getUserData() {
//   const dbRef = ref(getDatabase(app));
//   get(child(dbRef, `employees/2`)).then((snapshot) => {
//     if (snapshot.exists)
//     {
//       console.log(snapshot.val());
//     }
//     else {
//       console.log("No entry")
//     }
//   })
// }
// getUserData();

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
