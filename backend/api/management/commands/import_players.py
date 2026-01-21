import csv
from django.conf import settings
from django.core.management.base import BaseCommand
from api.models import Players


class Command(BaseCommand):
    def handle(self, *args, **options):
        file_path = (
            settings.BASE_DIR
            / "api"
            / "ML_models"
            / "data"
            / "new_data"
            / "players.csv"
        )

        with open(file_path, mode="r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            player_instances = []

            for row in reader:

                player_instances.append(
                    Players(player_id=row["player_id"], full_name=row["full_name"])
                )

            Players.objects.bulk_create(player_instances, ignore_conflicts=True)

        self.stdout.write(
            self.style.SUCCESS(f"Successfully imported data from {file_path}")
        )
