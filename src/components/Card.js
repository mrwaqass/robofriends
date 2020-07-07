import React from 'react';
const Card = ({name, email, id}) => {
    return(
        <div className='tc bg-light-green dib br3 pa1 ma1 grow bw2 shadow-3'>
            <img alt={name} src={`https://robohash.org/${id}?50x50`} />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        </div>
    );
}
export default Card;

// Bellow is the Class Syntax of above Component

// class Card extends Component{
//     render(){
//         return(
//             <div className='tc bg-light-green dib br3 pa3 mr2 grow bw2 shadow-3'>
//                 <img alt='robots' src={`https://robohash.org/${this.props.id}?200x200`} />
//                 <div>
//                     <h2>{this.props.name}</h2>
//                     <p>{this.props.email}</p>
//                 </div>
//             </div>
//         );
//     }
// }