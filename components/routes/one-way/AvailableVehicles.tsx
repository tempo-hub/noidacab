import {
    ArrowRight,
    CarFront,
    CheckCircle2,
    Users,
} from "lucide-react";
import type { Vehicle } from "@/data/vehicles";


type Props = {
    vehicles: Vehicle[];
};

export default function AvailableVehicles({ vehicles }: Props) {
    return (
        <section className="bg-gray-50 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
                        Available Vehicles
                    </p>

                    <h2 className="mt-2 text-3xl font-extrabold text-gray-950 sm:text-4xl">
                        Choose the Right Cab for Your Journey
                    </h2>

                    <p className="mt-3 text-gray-600">
                        Select a comfortable vehicle based on your group size,
                        luggage and travel requirements.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {vehicles.slice(0,6).map((vehicle) => (
                        <div
                            key={vehicle.slug}
                            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Vehicle visual */}
                            <div className="relative h-60 overflow-hidden bg-gray-100">
                                <img
                                    src={vehicle.image}
                                    alt={`${vehicle.name} available for one way taxi from Noida`}
                                    className="h-full w-full object-cover p-4 transition duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-950">
                                            {vehicle.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            {vehicle.category}
                                        </p>
                                    </div>

                                    <div className="rounded-lg bg-amber-50 px-2.5 py-1">
                                        <span className="text-xs font-bold text-amber-700">
                                            ₹{vehicle.price}/km
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-5 space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Users className="h-4 w-4 text-amber-600" />
                                        Comfortable seating
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                                        AC vehicle
                                    </div>
                                </div>

                                <div className="mt-5 border-t border-gray-100 pt-4">
                                    <a
                                        href="#fare-calculator"
                                        className="flex items-center justify-between text-sm font-bold text-gray-900"
                                    >
                                        Calculate Fare

                                        <ArrowRight className="h-4 w-4 text-amber-600 transition group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}