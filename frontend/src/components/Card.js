

const Card = ({title})=>{

    return (
        <div className="card 1">
        <div className="card_image"> <img src="https://media-exp1.licdn.com/dms/image/C4D1BAQECL8Dac80NQg/company-background_10000/0/1536741521261?e=2147483647&v=beta&t=V_ZJKSdzq-c7N3Xc7StU6VbTgrugnip7FeDvt_rOuRY" /> </div>
        <div className="card_title title-white">
          <p>{title}</p>
        </div>
      </div>
    )
}

export default Card;