import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
        </Helmet>
    )
}
Meta.defaultProps = {
    title: 'Welcome to Computer Accessories Online Store',
    description: 'we sell best products for cheap',
    keywords: 'computer accessories, buy computer accessories, cheap computer accessories'
}
export default Meta
