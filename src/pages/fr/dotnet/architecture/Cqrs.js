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
                    href="#cqrs"
                  >
                    CQRS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#example"
                  >
                    Exemple
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
          <article id="cqrs">
            <h6>CQRS</h6>
            <div>
              <p>
                CQRS sépare les modèles de données pour les opérations de
                lecture et d'écriture, permettant une meilleure évolutivité et
                optimisation tout en réduisant la complexité des systèmes à
                grande échelle.
              </p>
              <table>
                <thead>
                  <tr>
                    <th>
                      <strong>Composant</strong>
                    </th>
                    <th>
                      <strong>Description</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Command Model</strong>
                    </td>
                    <td>
                      Représente le modèle de données utilisé pour traiter les
                      écritures et les mises à jour.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Query Model</strong>
                    </td>
                    <td>
                      Représente le modèle de données utilisé pour effectuer des
                      lectures (requêtes).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Command Handler</strong>
                    </td>
                    <td>
                      Responsable de l'exécution de la commande, validant et
                      effectuant la logique métier.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Query Handler</strong>
                    </td>
                    <td>
                      Responsable de la récupération et du traitement des
                      données pour les requêtes.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Event Sourcing</strong>
                    </td>
                    <td>
                      Souvent utilisé avec CQRS, cet aspect permet de stocker
                      les changements d'état sous forme d'événements.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="example">
            <h6>Exemple</h6>
            <div>
              <Highlight language="csharp">
                {`// Commande : Créer une commande (ajouter des produits, calculer le prix total).
public class CreateOrderCommand
{
    public List<Product> Products { get; set; }
    public Customer Customer { get; set; }
}

//Command Handler : Créer la commande dans la base de données.
public class CreateOrderCommandHandler : ICommandHandler<CreateOrderCommand>
{
    private readonly IOrderRepository _orderRepository;

    public CreateOrderCommandHandler(IOrderRepository orderRepository)
    {
        _orderRepository = orderRepository;
    }

    public void Handle(CreateOrderCommand command)
    {
        var order = new Order(command.Products, command.Customer);
        _orderRepository.Save(order);
    }
}

// Requête : Récupérer les commandes d'un utilisateur.
public class GetOrdersQuery
{
    public Guid CustomerId { get; set; }
}

// Query Handler : Récupérer les commandes de la base de données.
public class GetOrdersQueryHandler : IQueryHandler<GetOrdersQuery, List<Order>>
{
    private readonly IOrderRepository _orderRepository;

    public GetOrdersQueryHandler(IOrderRepository orderRepository)
    {
        _orderRepository = orderRepository;
    }

    public List<Order> Handle(GetOrdersQuery query)
    {
        return _orderRepository.GetOrdersByCustomer(query.CustomerId);
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="mediator">
            <h6>
              <Link to="/mediator">MediatR</Link>
            </h6>
            <Highlight language="csharp">
              {`public class OrderService
{
    private readonly IMediator _mediator;

    public OrderService(IMediator mediator)
    {
        _mediator = mediator;
    }

    public async Task<Order> CreateOrder(List<Product> products, Customer customer)
    {
        var command = new CreateOrderCommand { Products = products, Customer = customer };
        return await _mediator.Send(command); // Envoie la commande au handler
    }

    public async Task<List<Order>> GetOrders(Guid customerId)
    {
        var query = new GetOrdersQuery { CustomerId = customerId };
        return await _mediator.Send(query); // Envoie la requête au handler
    }
}`}
            </Highlight>
          </article>
        </section>
      </div>
    </>
  );
}
