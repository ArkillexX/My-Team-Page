import React from "react";



export default function Frame({alt,url,ocuppation,name,className}){
    return(
        <div className={className}>
        <img alt={alt} src={url} />
        <h4>{ocuppation}</h4>
        <h2>{name}</h2>
        </div>
    );
}