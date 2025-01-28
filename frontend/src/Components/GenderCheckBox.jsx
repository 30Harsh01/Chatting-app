import React from 'react'

export default function GenderCheckBox(props) {
    
    return (
        <div className='flex mt-2'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-point ${props.selectedGender==="male"?"selected":" "} `}>
                    <span className='labe-text text-white'>Male</span>
                    <input onChange={()=>{props.handleCheckBoxChange("male")}} type="checkbox" className='checkbox border-slate-900' checked={props.selectedGender==="male"}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-point ${props.selectedGender==="female"?"selected":" "} `}>
                    <span className='labe-text text-white'>Female</span>
                    <input onChange={()=>{props.handleCheckBoxChange("female")}} checked={props.selectedGender==="female"} type="checkbox" className='checkbox border-slate-900' />
                </label>
            </div>
        </div>
    )
}
