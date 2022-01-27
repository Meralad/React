import React from "react";

class Hi extends React.Component {
    render(){
        return(
            <div>
                Это же 
            </div>
        );
    }
}

class Content extends React.Component {
    render () {
      const cont = <p>React</p>
      return (
        <div>
          {cont}
        </div>
      )
    }
  }

  class Baby extends React.Component {
    render () {
      const baby = <p>детка.</p>
      return (
        <div>
          {baby}
        </div>
      )
    }
  }

  function Exp(){
      return(
          <div>
             <p>Ура, го</p>
          </div>
      )
  }

  function ThatIsIt(){
    return(
        <div>
            я создал
        </div>
    )
}

export {Hi, Content, Baby, Exp, ThatIsIt }