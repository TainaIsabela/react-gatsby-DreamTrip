import React from 'react'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'


export const StatsData =[
    {
        icon: (<GiEarthAmerica css={`color: #047bf1`}/>),
        title: "Mais de 100 Destinos",
        desc: "Viaje para mais de 100 lugares únicos",
    },
    {
        icon: (<MdAirplanemodeActive css={`color: #f3a82e`}/>),
        title: "1 Milhão de viagens feitas",
        desc: "Mais de 1 Milhão de viagens foram feitas no ultimo ano",
    },
    {
        icon: (<MdTimer css={`color: #f34f2e`}/>),
        title: "Suporte Rápido",
        desc: "Acesse nosso suporte 24/7",
    },
    {
        icon: (<FaMoneyCheck css={`color: #3af576`}/>),
        title: "Melhores Ofertas",
        desc: "Nós oferecemos os melhores preços",
    },
]