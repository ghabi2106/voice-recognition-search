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
                Dans les architectures traditionnelles, le m??me mod??le de
                donn??es est utilis?? pour interroger et mettre ?? jour une base de
                donn??es. C'est simple et fonctionne bien pour les op??rations
                CRUD de base. Dans des applications plus complexes, cependant,
                cette approche peut devenir lourde.Par exemple, c??t?? lecture,
                l'application peut effectuer de nombreuses requ??tes diff??rentes,
                renvoyant des objets de transfert de donn??es (DTO) avec des
                formes diff??rentes. Le mappage d'objets peut devenir compliqu??.
                Du c??t?? de l'??criture, le mod??le peut impl??menter une validation
                et une logique m??tier complexes. En cons??quence, vous pouvez
                vous retrouver avec un mod??le trop complexe qui en fait trop.
              </p>
              <p>
                CQRS traite des lectures et des ??critures distinctes dans des
                mod??les distincts, en utilisant des commandes pour mettre ?? jour
                les donn??es et des requ??tes pour lire les donn??es.
              </p>
              <b>avoid thin controllers</b>
              <p>
                Dans les contr??leurs traditionnels, vous impl??mentez
                g??n??ralement presque un flux de logique m??tier comme Validation,
                Mapping Objects, Savings Object ou Get Object, Return HTTP
                status code of request et data response. Cependant, votre
                contr??leur deviendra plus gros.
              </p>
            </div>
          </article>
          <article id="mediator">
            <h6>
              <Link to="/mediator">MediatR</Link>
            </h6>
            <p>
              <Link to="/mediator">MediatR</Link> permet de composer des
              messages, de cr??er et d'??couter des ??v??nements en utilisant des
              mod??les synchrones ou asynchrones. Cela aide ?? r??duire le couplage
              et ?? isoler les pr??occupations de demander le travail ??
              faire(Request) et de cr??er le gestionnaire qui r??partit le
              travail(Handler).
            </p>
          </article>
          <article id="request">
            <h6>Request</h6>
            <div>
              <p>
                Les requ??tes d??crivent le comportement de vos commandes et
                requ??tes.
              </p>
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
                Lorsqu'une rqu??te est cr????e, On abesoin besoin d'un gestionnaire
                pour r??soudre cette demande demande.
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
