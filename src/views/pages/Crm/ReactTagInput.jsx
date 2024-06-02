/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { TagsInput } from "react-tag-input-component";



const ReactTagInput = () => {

    const [tags, setTags] = useState(["Promotion", "Rated "]);
    return (
        <div>
            <TagsInput
                tags={tags}
                value={tags}
            />
        </div>
    )
}


export default ReactTagInput;