import React, { Component } from 'react';
import Form from './Form';
import Tarefas from './Tarefas';
import Modal from './Modal';
import './Main.css';
export default class Main extends Component {
  state = {
    inputTarefa: '',
    tarefas: [],
    isModalOpen: false,
    editingTodo: undefined,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    const { inputTarefa } = this.state;

    if (!inputTarefa) return '';

    this.setState({
      tarefas: [
        ...tarefas,
        { id: String(Date.now()), name: inputTarefa, isCompleted: false },
      ],
      inputTarefa: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      inputTarefa: e.target.value,
    });
  };

  handleOpenModal = (tarefa) => {
    console.log('handleOpenModal: ', tarefa);

    this.setState({ isModalOpen: true, editingTodo: tarefa });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false, editingTodo: undefined });
  };

  handleEdit = (payload) => {
    const novasTarefas = this.state.tarefas.map(function (tarefa) {
      if (payload.id === tarefa.id) return { ...tarefa, ...payload };

      return tarefa;
    });

    this.setState({
      tarefas: novasTarefas,

      isModalOpen: false,
      // Setar o state da tarefa em que esta sendo editada
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  handleCompleteTodo = (tarefa_id) => {
    const novasTarefas = this.state.tarefas.map(function (tarefa) {
      if (tarefa_id === tarefa.id)
        return { ...tarefa, isCompleted: !tarefa.isCompleted };

      return tarefa;
    });
    this.setState({
      tarefas: novasTarefas,
    });
  };

  render() {
    const { inputTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1></h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={inputTarefa}
        />
        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleOpenModal}
          handleDelete={this.handleDelete}
          handleTogleIsCompleted={this.handleCompleteTodo}
        />
        <Modal
          todo={this.state.editingTodo}
          handleEditTodo={this.handleEdit}
          closeModal={this.handleCloseModal}
          isModalOpen={this.state.isModalOpen}
        />
      </div>
    );
  }
}
