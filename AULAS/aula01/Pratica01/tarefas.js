const tarefas = [
    { id: 1, nome: "Estudar JavaScript", concluida: false }
    
  ];
  
    function adicionarTarefas(nomeTarefas){

    const novaTarefa = {
        id: Date.now().toString(),
        nome: nomeTarefa,
        concluida: false
    }; 
     function listarTarefas(){

        return tarefas;
    }
}

     tarefas.push(novaTarefa);

     function removerTarefa(idTarefa){
        
        const posicao = tarefas.findIndex(task => task.id == idTarefa);
            if (posicao !== -1) {
                 tarefas.splice(posicao, 1);
        }

     }


    

    function modificarTarefa(idTarefa, tarefaModificada){

        const tarefaLocalizada = tarefas.find(tarefa => tarefa.id == idTarefa);
        if (tarefaLocalizada) {
          Object.assign(tarefaLocalizada, tarefaModificada);
        }
        
    }

    export { listarTarefas, adicionarTarefa, removerTarefa, modificarTarefa }
