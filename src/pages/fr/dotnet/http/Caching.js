import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Caching() {
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
                    href="#caching"
                  >
                    Caching
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#in-memory-caching"
                  >
                    In-memory caching
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#distributed-caching"
                  >
                    Distributed Caching
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#redis"
                  >
                    Redis
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
                    to="/caching"
                  >
                    Caching
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/controller"
                  >
                    Action Method, Result, Selectors
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/controllervuedata"
                  >ViewBag, ViewData and TempData</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/https"
                  >
                  HTTPS, HTTP and SSL</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpmethods"
                  >
                  HTTP Request Methods</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/jwt"
                  >JWT</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/"
                  >Services, Microservices, Web API, Web API vs WCF</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="dotnet-core">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Caching</h3>
          <article id="caching">
            <h6>Qu'est-ce que la mise en cache ?</h6>
            <p>
              La mise en cache signifie stocker temporairement des données dans
              la mémoire afin que l'application puisse accéder aux données du
              cache au lieu de rechercher leur emplacement d'origine. Cela
              augmente les performances de l'application et sa vitesse. L'espace
              de noms System.Runtime.Caching est utilisé pour la mise en cache
              des informations dans .Net.
            </p>
          </article>
          <article id="in-memory-caching">
            <h6>Mise en cache en mémoire</h6>
            <div>
              <p>
                Un cache en <strong>mémoire</strong> est stocké dans la mémoire
                d'un seul serveur hébergeant l'application. Fondamentalement,
                les données sont mises en cache dans l'application. C'est le
                moyen le plus simple d'améliorer considérablement les
                performances des applications.
              </p>
              <Highlight language="csharp">{`public void ConfigureServices(IServiceCollection services)
{
    services.AddMemoryCache();
    //Rest of the code
}`}</Highlight>
              <Highlight language="csharp">{`[Route("api/[controller]")]
[ApiController]
public class EmployeeController : ControllerBase
{
    private readonly IMemoryCache _memoryCache;
    private readonly ApplicationContext _context;
    public EmployeeController(IMemoryCache memoryCache, ApplicationContext context)
    {
        _memoryCache = memoryCache;
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllEmployee()
    {
        var cacheKey = "employeeList";
        //checks if cache entries exists
        if(!_memoryCache.TryGetValue(cacheKey, out List<Employee> employeeList))
        {
            //calling the server
            employeeList = await _context.Employees.ToListAsync();

            //setting up cache options
            var cacheExpiryOptions = new MemoryCacheEntryOptions
            {
                AbsoluteExpiration = DateTime.Now.AddSeconds(50),
                Priority = CacheItemPriority.High,
                SlidingExpiration = TimeSpan.FromSeconds(20)
            };
            //setting cache entries
            _memoryCache.Set(cacheKey, employeeList, cacheExpiryOptions);
        }
        return Ok(employeeList);
    }
}`}</Highlight>
            </div>
          </article>
          <article id="distributed-caching">
            <h6>Mise en cache distribuée</h6>
            <div>
              <p>
                Le cache distribué est un cache qui peut être partagé par une ou
                plusieurs applications et il est maintenu en tant que service
                externe accessible à tous les serveurs. Le cache distribué est
                donc externe à l'application.
              </p>
              <p>
                Le principal avantage de la mise en cache distribuée est que les
                données sont cohérentes sur plusieurs serveurs car le serveur
                est externe à l'application, toute défaillance d'une application
                n'affectera pas le serveur de cache.
              </p>
            </div>
          </article>
          <article id="redis">
            <h6>Redis</h6>
            <div>
              <p>
                <strong>Redis</strong> est un magasin de structure de données en
                mémoire open source (sous licence BSD), utilisé comme cache de
                base de données et courtier de messages. Il s'agit d'une base de
                données basée sur des valeurs-clés très rapide et même d'une
                base de données NoSQL. Redis est donc une excellente option pour
                implémenter un cache hautement disponible.
              </p>
              <ul>
                <li>
                  Installer les Nuget Packages: -
                  Microsoft.Exstensions.Caching.StackExchangeRedis
                  <br />
                  StackExchange.Redis
                </li>
                <li>
                  configuration en startup.cs
                  <br />
                  <Highlight language="csharp">{`public void ConfigureServices(IServiceCollection services) {
    //Rest of the code
    services.AddStackExchangeRedisCache(options => {
        options.Configuration = Configuration.GetConnectionString("Redis");
        options.InstanceName = "localRedis_";
    });
}`}</Highlight>
                </li>
                <li>
                  Créer une classe d'assistance "DistributedCacheExtensions" où
                  nous allons obtenir et définir des valeurs depuis et vers le
                  cache Redis.
                  <br />
                  <Highlight language="csharp">{`public static class DistributedCacheExtension {
    public static async Task SetRecordAsync < T > (this IDistributedCache cache, string recodeId, T data, TimeSpan ? absoluteExpireTime = null, TimeSpan ? slidingExpirationTime = null) {
        var options = new DistributedCacheEntryOptions();
        options.AbsoluteExpirationRelativeToNow = absoluteExpireTime ?? TimeSpan.FromSeconds(60);
        options.SlidingExpiration = slidingExpirationTime;
        var jsonData = JsonSerializer.Serialize(data);
        await cache.SetStringAsync(recodeId, jsonData, options);
    }
    public static async Task < T > GetRecordAsync < T > (this IDistributedCache cache, string recordId) {
        var jsonData = await cache.GetStringAsync(recordId);
        if (jsonData is null) {
            return default (T);
        }
        return JsonSerializer.Deserialize < T > (jsonData);
    }
}`}</Highlight>
                </li>
              </ul>
              <Highlight language="csharp">{`public class StudentController: ControllerBase {
    private readonly ApplicationContext _context = null;
    private readonly IDistributedCache _cache;
    public StudentController(ApplicationContext context, IDistributedCache cache) {
            _context = context;
            _cache = cache;
        }
        [HttpGet]
    public async Task < ActionResult < List < Student >>> Get() {
        var cacheKey = "GET_ALL_STUDENTS";
        List < Student > students = new List < Student > ();
        var data = await _cache.GetRecordAsync < List < Student >> (cacheKey);
        if (data is null) {
            Thread.Sleep(10000);
            data = _context.Student.ToList();
            await _cache.SetRecordAsync(cacheKey, data);
        }
        return data;
    }
}`}</Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
