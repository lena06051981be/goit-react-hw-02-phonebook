import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import React, { Component } from 'react'

class App extends Component {
  state = {
  contacts: [],
  name: ''
  }

  render() {
    return (
      <>
        <PhonebookForm />
      </>
  )
}
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template PHONEBOOK
//     </div>
//   );
// };

export default App