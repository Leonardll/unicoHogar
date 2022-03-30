 import Image from 'next/image'
 import ShitIcon from '../../assets/images/1.svg'
 import ShitIcon2 from '../../assets/images/2.svg'
 import ShitIcon3 from '../../assets/images/3.svg'

const propertyData = [
    {
        id: "VENDER",
        title: "VENDER MI PISO",
        icon: ShitIcon,
        text: [
          {
            id: "tasacion",
            content: "Tasación gratuita y valoración de mercado.",
          },
          {
            id: "Fotografías",
            content: "Fotografías y comercialización.",
          },
          {
            id: "rentabilidad",
            content: "Cálculo de rentabilidad.",
          },
          {
            id: "fiscal",
            content: "Asesoramiento fiscal.",
          },

        ],
      },
    {
        id: "ALQUILAR",
        title: "ALQUILAR MI PISO",
        icon: ShitIcon2,
        text: [
          {
            id: "ideal",
            content: "Buscamos tu inquilino ideal.",
          },
          {
            id: "contrato",
            content: "asesorarme con el fin de contrato.",
          },
          {
            id: "legal.",
            content: "Asesoramiento legal.",
          },
          {
            id: "alquileres",
            content: "Gestión de alquileres.",
          },

        ],
      },
    {
        id: "PERSONALSHOPPER",
        title: "PERSONAL SHOPPER",
        icon: ShitIcon3,
        text: [
          {
            id: "pisoideal",
            content: "Te acompañamos en la búsqueda de tu piso ideal en todo el mercado de Barcelona",
          },
          {
            id: " diseñodeinteriores",
            content: "Te asesoraremos en obras, reformas o diseño de interiores para que quede de ensueño",
          },

        ],
      },
]
const PropertyManagement = () => {
    return (
        <div className="section">
        <div className="container">
        <div className="text-center">
        <h1 className=" my-4 text-capitalize">Property Management</h1>
        </div>
        <h3 className="text-capitalize property-subheading mt-3">¿QUÉ BUSCAS?</h3>
        <p className="lead property-subheading-text">Aquí verás varias de las gestiones que realizamos, pero si no encuentras lo que buscas ¡no te alarmes! haremos lo posible para solventarlo. Somos capaces de encontrar el hogar de tus sueños y hasta el mejor profesor de Yoga.</p>    
        </div>
        <div className="container">
            <div className="row text-center mt-5">
                {
                    propertyData.map((item) => {
                        return (
                            <div className="col-md-4" key={item.id}>
                            <span className="fa-stack fa-4x">
                                <Image src={item.icon} alt='' className="fw-3 svg-inline--fa  fa-house fa-stack-1x fa-inverse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house" role="img" />
                            </span>
                            <h4 className="my-3 text-hogar2 text-uppercase">{item.title}</h4>
                            <ul className='list-unstyled'>
                                {
                                item.text.map((content)=> {
                                    return (
                                <li key={content.id}>
                                    <p className="m-0 text-muted ">{content.content}</p>
                                </li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                        )
                    })
                }
          

            </div>
        </div>
    </div>
)
    
}

export default PropertyManagement;