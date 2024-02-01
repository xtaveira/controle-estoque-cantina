import Button from '@/components/Button'
import Input from '@/components/Input'
import React from 'react'

const page = () => {
    return (
        <main className="bg-[#ffffe5] h-full flex flex-col justify-center items-center">
            <div>
                <div className="p-5 bg-[#f7f19a] flex flex-col gap-2">
                    <div className="flex justify-center text-2xl m-5">
                        <h1>INSERIR REFEIÇÃO</h1>
                    </div>
                    <label htmlFor="name" className="flex gap-5 justify-between">name:<Input /></label>
                    <label htmlFor="refeicao" className="flex gap-5  justify-between">refeicao:<Input /></label>
                    <label htmlFor="data" className="flex gap-5  justify-between">data:<Input /></label>
                    <div className="flex gap-4 justify-between">
                        <p>Coca</p>
                        <div className="flex  gap-7">
                            <label htmlFor="cocaF" className="flex gap-1">Fardos:<input className="w-8"></input></label>
                            <label htmlFor="cocaS" className="flex gap-1">Soltas:<input className="w-8"></input></label>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between">
                        <p>Guaraná</p>
                        <div className="flex  gap-7">
                            <label htmlFor="cocaF" className="flex gap-1">Fardos:<input className="w-8"></input></label>
                            <label htmlFor="cocaS" className="flex gap-1">Soltas:<input className="w-8"></input></label>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between">
                        <p>Suco</p>
                        <div className="flex  gap-7">
                            <label htmlFor="cocaF" className="flex gap-1">Fardos:<input className="w-8"></input></label>
                            <label htmlFor="cocaS" className="flex gap-1">Soltas:<input className="w-8"></input></label>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between">
                        <p>Coca-Zero</p>
                        <div className="flex  gap-7">
                            <label htmlFor="cocaF" className="flex gap-1">Fardos:<input className="w-8"></input></label>
                            <label htmlFor="cocaS" className="flex gap-1">Soltas:<input className="w-8"></input></label>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between">
                        <p>Guaraná-Zero</p>
                        <div className="flex  gap-7">
                            <label htmlFor="cocaF" className="flex gap-1">Fardos:<input className="w-8"></input></label>
                            <label htmlFor="cocaS" className="flex gap-1">Soltas:<input className="w-8"></input></label>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between">
                        <p>Água</p>
                        <div className="flex  gap-7">
                            <label htmlFor="cocaF" className="flex gap-1">Fardos:<input className="w-8"></input></label>
                            <label htmlFor="cocaS" className="flex gap-1">Soltas:<input className="w-8"></input></label>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between">
                        <p>Água Gás</p>
                        <div className="flex  gap-7">
                            <label htmlFor="cocaF" className="flex gap-1">Fardos:<input className="w-8"></input></label>
                            <label htmlFor="cocaS" className="flex gap-1">Soltas:<input className="w-8"></input></label>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between">
                        <p>H2O</p>
                        <div className="flex  gap-7">
                            <label htmlFor="cocaF" className="flex gap-1">Fardos:<input className="w-8"></input></label>
                            <label htmlFor="cocaS" className="flex gap-1">Soltas:<input className="w-8"></input></label>
                        </div>
                    </div>



                    <div className="flex justify-center m-5">
                        <Button />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page