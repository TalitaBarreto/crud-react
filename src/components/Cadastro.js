import React, {useState, useEffect} from "react";
import FormularioCadastro from "./FormularioCadastro";
import fireDb from '../database/firebase.js' 


const Cadastro = () =>{

    let [dadosAlunos, setDadosAlunos] = useState({})

    let [idAluno, setIdAluno] = useState('')

    useEffect(() =>{
        fireDb.child('aluno').on('value', dbAluno =>{
            if(dbAluno.val() != null){
                setDadosAlunos({
                    ...dbAluno.val()
                })
            }else{
                setDadosAlunos({})
            }
        })
    }, [])

    const addEdita = obj =>{
        if(idAluno == ""){
            fireDb.child('aluno').push(
                obj, 
                error =>{
                    if(error){
                        console.log(error)
                    }else{
                        setIdAluno("")
                    }
                    
                }
            )
        }else{
            fireDb.child(`aluno/${idAluno}`).set(
                obj,
                err => {
                    if(err){
                        console.log(err)
                    }
                }
            )
        }
        
    }

    const deleteAluno = key => {
        if(window.confirm('Deseja deletar esse aluno?')){
            fireDb.child(`aluno/${key}`).remove(
                err => {
                    if(err){
                        console.log(err)
                    }
                }
            )
        }
    }

    return(
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Cadastro</h1>                        
                    </div>
                 </div>
                 <div className="row">
                    <div className="col-md-5">
                        <FormularioCadastro {...({addEdita, idAluno, dadosAlunos})}/>
                    </div>
                    <div className="col-md-7">
                        <h3>Lista de Alunos</h3>
                        <table className="table table-boderless table-stripped">
                            <thead className="thead-light">
                                <tr>
                                    <td>Nome Completo</td>
                                    <td>Telefone</td>
                                    <td>Email</td>  
                                    <td>Ações</td>                                  
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(dadosAlunos).map(id =>{
                                        return <tr key={id}>
                                            <td> {dadosAlunos[id].nomeCompleto} </td>
                                            <td> {dadosAlunos[id].telefone} </td>
                                            <td> {dadosAlunos[id].email} </td>   

                                            <td>
                                                <a className="btn btn-primary" onClick={() => {setIdAluno(id)}}> 
                                                    <li className="fas fa-pencil-alt"></li>
                                                </a>

                                                <a className="btn btn-danger" onClick={ () => deleteAluno(id)}> 
                                                    <li className="fas fa-trash-alt"></li>
                                                </a>
                                            </td>                                         
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                 </div>
            </div>
           
        </div>
    )
}

export default Cadastro;