import React, { useEffect, useState } from "react";


const FormularioCadastro = (props) =>{

    const dadosUsuario = {
        nomeCompleto: '',
        telefone: '',
        email: '',
        endereco: ''
    }

    let [values, setValues] = useState(dadosUsuario)

    useEffect( () => {
        if(props.idAluno == ""){
            setValues({
                ...dadosUsuario
            })
        }else{
            setValues({
                ...props.dadosAlunos[props.idAluno]
            })
        }
    }, [props.idAluno, props.dadosAlunos])

    const onChangeInput = e =>{
        let { name, value} = e.target
        
        setValues({
            ...values,
            [name]: value
        })
    }

    const formsEnvio = e =>{
        e.preventDefault()
        props.addEdita(values)
    }

    return(
        <div>              
            <form autoComplete="off" onSubmit={formsEnvio}>
                <div className="row">
                    <div className="col-md-12">                   
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="Nome Completo" name="nomeCompleto" value={values.nomeCompleto} onChange={onChangeInput}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">                   
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="Telefone" name="telefone" value={values.telefone} onChange={onChangeInput}/>
                        </div>
                    </div>
                    <div className="col-md-6">                   
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-envelope" style={{height:25}}></i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="Email" name="email" value={values.email} onChange={onChangeInput}/>
                        </div>
                    </div>
                </div>
                <div className="row">                    
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea className="form-control" placeholder="endereco" name="endereco" value={values.endereco} onChange={onChangeInput}/>
                        </div>
                    </div>
                </div>
                <div className="row">                
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="submit" value={props.idAluno == '' ? 'Salvar' : 'Atualizar'} className="btn btn-primary btn-block"/>
                        </div>                        
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormularioCadastro;