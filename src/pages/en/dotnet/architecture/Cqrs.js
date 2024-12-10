import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Cqrs() {
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
                    href="#introduction"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#mediator"
                  >
                    MediatR
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#request"
                  >
                    Request
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#handler"
                  >
                    Handler
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#command"
                  >
                    Command
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#command-handler"
                  >
                    Command Handler
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#controller"
                  >
                    Controller
                  </a>
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
                    to="/mvc"
                  >
                    MVC
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/clean"
                  >
                    Clean Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/cqrs"
                  >
                    CQRS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/ddd"
                  >
                    DDD
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
          <h3>CQRS</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                CQRS (Command Query Responsibility Segregation) is an
                architectural pattern that separates the responsibility of
                reading data (queries) from modifying data (commands).
              </p>
              <p>
                CQRS separates reads and writes into different models, using
                commands to update data, and queries to read data.
              </p>
              <ul>
                <li>
                  <strong>Command</strong>: Modifies data, often using domain
                  logic.
                </li>
                <li>
                  <strong>Query</strong>: Retrieves data, optimized for reading.
                </li>
              </ul>
              <p>
                CQRS is useful in systems with complex business logic or high
                performance demands, improving scalability and maintainability
                by handling reads and writes independently. <br />
                It can be combined with Event Sourcing for even more powerful
                tracking of state changes.
              </p>
            </div>
          </article>
          <article id="mediator">
            <h6>
              <Link to="/mediator">MediatR</Link>
            </h6>
            <p>
              <Link to="/mediator">MediatR</Link> is a .NET library that
              implements the Mediator pattern, simplifying the communication
              between different parts of an application. <br/>It decouples requests
              (commands, queries) from handlers, making code more maintainable.
              <br/>You define request objects (e.g., commands, queries) and implement
              handlers to process them. <br/>MediatR supports asynchronous operations
              and can be easily integrated with the Dependency Injection system
              in ASP.NET Core. <br/>It's often used to implement CQRS, event
              handling, and pipeline behaviors in a clean and decoupled way
            </p>
          </article>
          <article id="request">
            <h6>Query</h6>
            <div>
              <p>Queries describe the behavior of your commands and queries.</p>
              <Highlight language="csharp">
                {`public class GetUserDetailQuery : IRequest<UserDto>
{
    public GetUserDetailQuery(int id) {
    	Id = id;
    }
    
    public int Id {get;}
}`}
              </Highlight>
            </div>
          </article>
          <article id="handler">
            <h6>Query Handler</h6>
            <div>
              <p>
                When a request is created, we need a manager to resolve this
                request request.
              </p>
              <Highlight language="csharp">
                {`public class GetUserDetailHandler : IRequestHandler<GetUserDetailQuery, UserDto> 
{
   	private readonly IUserRepository _userRepository;
    private readonly IUserMapper _userMapper;
    
    public GetUserDetailHandler(IUserRepository userRepository, IUserMapper userMapper) {
    	_userRepository = userRepository ?? throw new ArgumentNullException(nameof(userRepository));
    	_userMapper = userMapper ?? throw new ArgumentNullException(nameof(userMapper));
    }
    
    public async Task<UserDto> Handle(GetUserDetailQuery request, CancellationToken cancellationToken) {
    var user = await _userRepository.GetAsync(u => u.Id == request.Id)
    
    if user == null {
    	return null
    }
    
    var userDto = _userMapper.MapUserDto(user);
    return userDto;
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="command">
            <h6>Command</h6>
            <div>
              <p>Commands describe the behavior of your commands and queries.</p>
              <Highlight language="csharp">
                {`public class CreateUserCommand : IRequest<User>
{
    public string Name { get; set; }
    public string Email { get; set; }
}`}
              </Highlight>
            </div>
          </article>
          <article id="command-handler">
            <h6>Command Handler</h6>
            <div>
              <p>
                When a request is created, we need a manager to resolve this
                request.
              </p>
              <Highlight language="csharp">
                {`public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, User>
{
    private readonly ApplicationDbContext _context;

    public CreateUserCommandHandler(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<User> Handle(CreateUserCommand request, CancellationToken cancellationToken)
    {
        var user = new User { Name = request.Name, Email = request.Email };
        _context.Users.Add(user);
        await _context.SaveChangesAsync(cancellationToken);
        return user;
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="controller">
            <h6>Controller</h6>
            <div>
              <p>
              Send a Command
              </p>
              <Highlight language="csharp">
                {`public class UserController : Controller
{
    private readonly IMediator _mediator;

    public UserController(IMediator mediator)
    {
        _mediator = mediator;
    }

    public async Task<IActionResult> CreateUser(string name, string email)
    {
        var command = new CreateUserCommand { Name = name, Email = email };
        var user = await _mediator.Send(command);
        return Ok(user);
    }
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
