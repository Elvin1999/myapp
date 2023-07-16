//import React from 'react'

// const people=[
// 'Elvin Camalzade : Fullstack Developer',
// 'Ali Mammadov : IT Specialist',
// 'Togrul Babayer : Designer',
// 'Aysel Mammadova : Crator',
// 'Meryem Hacizade : Marketing',
// ];

// const listItems=people.map(person=><li>{person}</li>);

// export default function Listitems() {
//   return (
//     <div>
//       <ul>
//         {listItems}
//       </ul>
//     </div>
//   )
// }

import React from 'react'
import {people} from './data.js'
import {getImageUrl} from './Utils.js'

const persons=people.filter(p=>p.imageId>=1);

const listItems=persons.map(person=>
  <li id={person.id}>
    <img className='user-img' src={getImageUrl(person)} />
    <h3>Name : <b>{person.name}</b></h3>
    <hr/>
    <h4>Profession : <b>{person.profession}</b></h4>
  </li>
);
export default function Listitems() {
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}




