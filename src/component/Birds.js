import React, { Component } from "react"
import { inject, observer } from "mobx-react"

@inject("BirdStore")
@observer
class Birds extends Component {
    render() {
        const { BirdStore } = this.props;
        console.log(BirdStore.birdsCount)
        return (
            <>

                <h1>we have {BirdStore.birdsCount} birds </h1>
            </>
        )

    }
}

export default Birds;