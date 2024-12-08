import pandas as pd
import matplotlib.pyplot as plt

# Data for Norway's electricity prices and inflation rates
norway_data = {
    "Year": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Average Cost (€/kWh)": [
        0.160,
        0.150,
        0.160,
        0.170,
        0.190,
        0.180,
        0.150,
        0.200,
        0.230,
        0.186,
    ],
    "Difference (€/kWh)": [
        None,
        -0.010,
        0.010,
        0.010,
        0.020,
        -0.010,
        -0.030,
        0.050,
        0.030,
        -0.044,
    ],
    "% Change": [None, -6.3, 6.7, 6.3, 11.8, -5.3, -16.7, 33.3, 15.0, -19.1],
    "Inflation (% annual)": [2.0, 2.1, 3.6, 1.9, 2.8, 2.2, 1.3, 3.5, 5.8, 5.5],
}

df_norway = pd.DataFrame(norway_data)

# Create plots
plt.figure(figsize=(14, 10))

# Plot 1: Average Cost per kWh
plt.subplot(2, 2, 1)
plt.plot(
    df_norway["Year"],
    df_norway["Average Cost (€/kWh)"],
    marker="o",
    label="Average Cost (€/kWh)",
)
plt.title("Average Electricity Cost per kWh (2014-2023) in Norway")
plt.xlabel("Year")
plt.ylabel("Cost (€/kWh)")
plt.grid(True)
plt.legend()

# Plot 2: Difference in Cost
plt.subplot(2, 2, 2)
plt.bar(
    df_norway["Year"],
    df_norway["Difference (€/kWh)"],
    color="orange",
    label="Difference (€/kWh)",
)
plt.title("Annual Change in Electricity Cost (2014-2023) in Norway")
plt.xlabel("Year")
plt.ylabel("Difference (€/kWh)")
plt.axhline(0, color="black", linewidth=0.8, linestyle="--")
plt.grid(axis="y")
plt.legend()

# Plot 3: Percentage Change
plt.subplot(2, 2, 3)
plt.plot(
    df_norway["Year"],
    df_norway["% Change"],
    marker="s",
    linestyle="-",
    color="green",
    label="% Change",
)
plt.title("Annual Percentage Change in Cost (2014-2023) in Norway")
plt.xlabel("Year")
plt.ylabel("Percentage Change (%)")
plt.axhline(0, color="black", linewidth=0.8, linestyle="--")
plt.grid(True)
plt.legend()

# Plot 4: Inflation Rates
plt.subplot(2, 2, 4)
plt.plot(
    df_norway["Year"],
    df_norway["Inflation (% annual)"],
    marker="d",
    linestyle="-",
    color="red",
    label="Inflation Rate (%)",
)
plt.title("Annual Inflation Rate (2014-2023) in Norway")
plt.xlabel("Year")
plt.ylabel("Inflation Rate (%)")
plt.grid(True)
plt.legend()

# Adjust layout and show the plots
plt.tight_layout()
plt.show()
