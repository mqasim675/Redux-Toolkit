// import { Inter } from "next/font/google";
// import { useAppDispatch, useAppSelector } from "@/features/app/hooks";
// import { incremented, amountAdded } from "@/features/counter/counter-slice";
// import { useFetchBreedsQuery } from "@/features/counter/dog/dog-api-slice";
// import { useState } from "react";
// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   const [numDogs, setNumDogs] = useState(40);
//   const count = useAppSelector((state) => state.counter.value);
//   const dispatch = useAppDispatch();
//   const handdleclick = () => {
//     //increment by 1
//     dispatch(incremented());
//     //increment by 2
//     dispatch(amountAdded(2));
//   };
//   const { data = [], isFetching } = useFetchBreedsQuery();
//   return (
//     <>
//       <div>
//         <button onClick={handdleclick}>count is: {count}</button>
//         <div>
//           <div>
//             <p>dog to fetch:</p>
//             <select
//               value={numDogs}
//               onChange={(e) => setNumDogs(Number(e.target.value))}
//             >
//               <option value="5">5</option>
//               <option value="10">10</option>
//               <option value="15">15</option>
//             </select>
//           </div>
//           <p>Number of dog's fetched: {data.length}</p>
//           <table>
//             <thead>
//               <tr>
//                 <th>name</th>
//                 <th>picture</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((Breed: any) => (
//                 <tr key={Breed.id}>
//                   <td>{Breed.name}</td>
//                   <td>
//                     <img src={Breed.image.url} alt={Breed.name} height={200} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// Home.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchAsteroidsQuery } from "./../features/counter/dog/dog-api-slice"; // Import the NASA API slice

export default function Home() {
  const startDate = "2015-09-07"; // Set your desired start date

  const { data: asteroidData, isLoading, isError } = useFetchAsteroidsQuery(startDate);

  useEffect(() => {
    if (isError) {
      console.error("Error fetching asteroid data");
    }
  }, [isError]);

  return (
    <div>
      <h1>NASA Asteroid Data</h1>
      {isLoading ? (
        <p>Loading asteroid data...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(asteroidData?.near_earth_objects).map((date) =>
              asteroidData.near_earth_objects[date].map((asteroid: any) => (
                <tr key={asteroid.id}>
                  <td>{asteroid.name}</td>
                  <td>{asteroid.id}</td>
                  <td>{asteroid.magnitude}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

