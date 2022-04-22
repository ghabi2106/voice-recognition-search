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
                In traditional architectures, the same data model is used to
                query and update a database. That's simple and works well for
                basic CRUD operations. In more complex applications, however,
                this approach can become unwieldy. For example, on the read
                side, the application may perform many different queries,
                returning data transfer objects (DTOs) with different shapes.
                Object mapping can become complicated. On the write side, the
                model may implement complex validation and business logic. As a
                result, you can end up with an overly complex model that does
                too much.
              </p>
              <p>
                CQRS separates reads and writes into different models, using
                commands to update data, and queries to read data.
              </p>
              <b>avoid thin controllers</b>
              <p>
                In the traditional Controllers, you usually implement almost
                business logic flow in like as Validation, Mapping Objects,
                Savings Object, or Get Object, Return HTTP status code of
                request and the data response if have, your controller will get
                more fat.
              </p>
            </div>
          </article>
          <article id="mediator">
            <h6>
              <Link to="/mediator">MediatR</Link>
            </h6>
            <p>
              <Link to="/mediator">MediatR</Link> allows you to compose
              messages, create and listen for events using synchronous or
              asynchronous patterns. It helps to reduce coupling and isolate the
              concerns of requesting the work to be done and creating the
              handler that dispatches the work.
            </p>
          </article>
          <article id="request">
            <h6>Request</h6>
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
            <h6>Handler</h6>
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
        </section>
      </div>
    </>
  );
}
