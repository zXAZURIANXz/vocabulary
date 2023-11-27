import React, { useEffect, useState } from 'react';
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { setWords } from "../Services/api";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Knob } from 'primereact/knob';
import { showNotification } from '../Services/ShowNotification'

export default function FieldSetComponent({container,title}) {


    /**
     * Tiempo
     */
    const [value, setValue] = useState(10);

    /**
     * Inputs
     */
    const [inputValues, setInputValues] = useState({
        word: '',
        meaning: '',
        usexample: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
          ...inputValues, 
          [name]: value, 
        });
    };

    /**
     * Prueba Notificaciones
     */

    const turnOnNotification = () =>{
        //showNotification();
        const intervalId = setInterval(showNotification, 5000);
        return () => {
            clearInterval(intervalId);
            test();
        };
    }


     

    /**
     * Guarda la palabra nueva en BD
     */
    const saveWord = () => { console.log(inputValues); setWords(inputValues);}

    
    return (
        <>
            <Fieldset legend={title}>
                <p className="m-0">
                    {container}
                </p>
                <Splitter style={{ height: '300px' }}>
                    <SplitterPanel className="flex align-items-center justify-content-center">
                    <div className="flex-auto">
                        <label htmlFor="integeronly" className="font-bold block mb-2" style={{marginRight:'10px'}}>Palabra</label>
                        <InputText name="word" inputId="integeronly" value={inputValues.word} onChange={handleInputChange} style={{marginRight:'20px'}}/>

                        <label htmlFor="integeronly" className="font-bold block mb-2" style={{marginRight:'10px'}}>Definicion</label>
                        <InputText name="meaning" inputId="integeronly" value={inputValues.meaning} onChange={handleInputChange} style={{marginRight:'20px'}}/>

                        <label htmlFor="integeronly" className="font-bold block mb-2" style={{marginRight:'10px'}}>Ejemplo</label>
                        <InputText name="usexample" inputId="integeronly" value={inputValues.usexample} onChange={handleInputChange} style={{marginRight:'20px'}} />

                        {/* <InputText inputId="integeronly" value={label} onValueChange={(e) => setValue1(e.value)} /> */}
                        <Button onClick={saveWord} label="Guardar Palabra" />
                    </div>
                        
                    </SplitterPanel>
                    <SplitterPanel style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                        <h3 style={{textAlign:'center'}}>¿Con qué frecuencia deseas que aparezca una palabra nueva?</h3>
                        <br />
                        <Knob value={value} step={5} max={30} onChange={(e) => setValue(e.value)} />

                        <h3 style={{textAlign:'center'}}>{value} Min.</h3>
                        <Button label="Guardar" />
                        <br />
                        <Button onClick={turnOnNotification} label="Mostrar notificación" />
                    </SplitterPanel>
                </Splitter>
                
                
            </Fieldset>
        </>
        
    )
}