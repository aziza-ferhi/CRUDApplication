using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Contexts
{
    public class PaymentDetailContext: DbContext
    {
       
            public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options) : base(options)
            { }

            public DbSet<PaymentDetail> PaymentDetails { get; set; }
        

    }
}
