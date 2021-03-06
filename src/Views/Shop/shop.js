import React, { Component } from 'react';
import SHOP_DATA from "./shop.data"
import CollectionPreview from "../../Components/PreviewCollection/PreviewCollection";

export default class shop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections : SHOP_DATA
        }
    }
    
    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {collections.map(({id, ...otherCollectionprops}) =>(
                    <CollectionPreview key={id} {...otherCollectionprops} />
                ))}
            </div>
        )
    }
}
