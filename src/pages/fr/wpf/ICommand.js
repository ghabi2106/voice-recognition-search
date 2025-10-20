import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function ICommand() {
  return (
    <>
      <aside className="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
        <h2 className="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
        <nav className="small" id="toc">
          <ul className="list-unstyled">
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Contents
              </button>
              <ul
                className="list-unstyled ps-3 collapse show"
                id="contents-collapse"
              >
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#command"
                  >ICommand</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#relayCommand"
                  >RelayCommand</a>
                </li>
              </ul>
            </li>
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Related links
              </button>
              <ul
                className="list-unstyled ps-3 collapse show"
                id="contents-collapse"
              >
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/angular"
                  >
                    Angular
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="dotnet-core">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>ICommand</h3>
          <article id="command">
            <h6>ICommand</h6>
            <div>
              <p><code>ICommand</code> is an interface used to <strong>bind UI actions to logic</strong>.</p>
              <Highlight language="csharp">
                {`public interface ICommand
{
    bool CanExecute(object parameter);
    void Execute(object parameter);
    event EventHandler CanExecuteChanged;
}`}
              </Highlight>
            </div>
          </article>
          <article id="relay-command">
            <h6>Use with RelayCommand</h6>
            <div>
              <p>How to Use ICommand with RelayCommand (or DelegateCommand)</p>
              <ul>
                <li>
                  Step 1: Implement RelayCommand<br/>
              <Highlight language="csharp">
                {`public class RelayCommand : ICommand
{
    private readonly Action<object> _execute;
    private readonly Predicate<object> _canExecute;

    public RelayCommand(Action<object> execute, Predicate<object> canExecute = null)
    {
        _execute = execute ?? throw new ArgumentNullException(nameof(execute));
        _canExecute = canExecute;
    }

    public bool CanExecute(object parameter) => _canExecute == null || _canExecute(parameter);

    public void Execute(object parameter) => _execute(parameter);

    public event EventHandler CanExecuteChanged
    {
        add => CommandManager.RequerySuggested += value;
        remove => CommandManager.RequerySuggested -= value;
    }
}`}
              </Highlight>
                </li>
                <li>
                  Step 2: Define a ViewModel with a Command<br/>
              <Highlight language="csharp">
                {`public class MainViewModel : INotifyPropertyChanged
{
    public ICommand SayHelloCommand { get; }

    public MainViewModel()
    {
        SayHelloCommand = new RelayCommand(param => SayHello(), param => CanSayHello);
    }

    private void SayHello()
    {
        MessageBox.Show("Hello from ViewModel!");
    }

    private bool CanSayHello => true;

    public event PropertyChangedEventHandler PropertyChanged;
}
`}
              </Highlight>
                </li>
                <li>
                  Step 3: Bind Command in XAML<br/>
              <Highlight language="xml">
                {`<Window x:Class="ICommandDemo.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:ICommandDemo"
        Title="ICommand Example" Height="200" Width="300">
    
    <Window.DataContext>
        <local:MainViewModel />
    </Window.DataContext>

    <Grid>
        <Button Content="Say Hello" Command="{Binding SayHelloCommand}" Width="100" Height="30" />
    </Grid>
</Window>`}
              </Highlight>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
