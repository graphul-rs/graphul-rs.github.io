import React from 'react'

interface CardForDocumentationProps {
    image: string;
    alt: string;
    title: string;
    description: string;
    link: string;
}

export default function CardForDocumentation({ image, alt, title, description, link }: CardForDocumentationProps) {

    return (<>
        <div className="center">
            <div className="card-in-docs">
                <div className="card">
                    <div className="card__image">
                        <img src={image} alt={alt} title={title} />
                    </div>
                    <div className="card__body">
                        <h4>{title}</h4>
                        <small>{description}</small>
                    </div>
                    <div className="card__footer">
                        <a href={link}><button className="button button--primary button--block">Visit</button></a>
                    </div>
                </div>
            </div>
        </div>
    </>)
}