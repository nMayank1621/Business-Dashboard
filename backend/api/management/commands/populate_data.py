from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import timedelta
import random
from api.models import SalesData, Customer, Order


class Command(BaseCommand):
    help = 'Populates the database with sample data'

    def handle(self, *args, **options):
        self.stdout.write('Populating database with sample data...')

        # Create sample customers
        customers = []
        customer_names = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Williams', 'Charlie Brown',
                         'Diana Prince', 'Edward Wilson', 'Fiona Davis', 'George Miller', 'Hannah Taylor']
        
        for name in customer_names:
            email = name.lower().replace(' ', '.') + '@example.com'
            customer = Customer.objects.create(name=name, email=email)
            customers.append(customer)
            self.stdout.write(f'Created customer: {name}')

        # Create sample sales data for the last 30 days
        regions = ['North', 'South', 'East', 'West']
        products = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E']
        
        base_date = timezone.now().date() - timedelta(days=30)
        
        for i in range(30):
            date = base_date + timedelta(days=i)
            for region in regions:
                for product in products:
                    amount = random.uniform(100, 5000)
                    SalesData.objects.create(
                        date=date,
                        amount=round(amount, 2),
                        region=region,
                        product=product
                    )
        self.stdout.write('Created 30 days of sales data')

        # Create sample orders
        statuses = ['pending', 'completed', 'completed', 'completed', 'cancelled']
        
        for _ in range(20):
            customer = random.choice(customers)
            total_amount = random.uniform(50, 1000)
            status = random.choice(statuses)
            Order.objects.create(
                customer=customer,
                total_amount=round(total_amount, 2),
                status=status
            )
            customer.total_orders += 1
            customer.save()

        self.stdout.write(self.style.SUCCESS('Successfully populated database with sample data!'))
