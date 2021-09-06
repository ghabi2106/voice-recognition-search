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
                    to="/entityframework"
                  >
                    Entity Framework
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
          <h3>Caching</h3>
          <article id="caching">
            <h6>What is Caching?</h6>
            <p>
              Caching means storing data temporarily in the memory so that the
              application can access the data from the cache instead of looking
              for its original location. This increases the performance of the
              application and its speed. System.Runtime.Caching namespace is
              used for Caching information in .Net.
            </p>
            <p>There are two types of caching:</p>
            <ul>
              <li>In-memory caching</li>
              <li>Distributed Caching</li>
            </ul>
          </article>
          <article id="in-memory-caching">
            <h6>In-memory caching</h6>
            <div>
              <p>
                An<strong> in-memory</strong> cache is stored in the memory of a
                single server hosting the application. Basically, the data is
                cached within the application. This is the easiest way to
                drastically improve application performance.
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
            <h6>Distributed Caching</h6>
            <div>
              <p>
                Distributed cache is a cache that can be shared by one or more
                applications and it is maintained as an external service that is
                accessible to all servers. So distributed cache is external to
                the application.
              </p>
              <p>
                The main advantage of distributed caching is that data is
                consistent throughout multiple servers as the server is external
                to the application, any failure of any application will not
                affect the cache server.
              </p>
            </div>
          </article>
          <article id="redis">
            <h6>Redis</h6>
            <div>
              <p>
                <strong>Redis</strong> is an open-source(BSD licensed),
                in-memory data structure store, used as a database cache and
                message broker. It is really fast key-value based database and
                even NoSQL database as well. So Redis is a great option for
                implementing highly available cache.
              </p>
              <ul>
                <li>
                  Installing the Nuget Packages: -
                  Microsoft.Exstensions.Caching.StackExchangeRedis
                  <br />
                  StackExchange.Redis
                </li>
                <li>
                  configuration on startup.cs
                  <br />
                  <Highlight language="bash">{`public void ConfigureServices(IServiceCollection services) {
    //Rest of the code
    services.AddStackExchangeRedisCache(options => {
        options.Configuration = Configuration.GetConnectionString("Redis");
        options.InstanceName = "localRedis_";
    });
}`}</Highlight>
                </li>
                <li>
                  Create a helper class "DistributedCacheExtensions" where we
                  will Get and Set Values from and to Redis Cache.
                  <br />
                  <Highlight language="bash">{`public static class DistributedCacheExtension {
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
              <Highlight language="bash">{`public class StudentController: ControllerBase {
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
