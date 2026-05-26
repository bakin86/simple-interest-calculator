#!/bin/bash
# Simple Interest Calculator

echo "Enter Principal Amount:"
read principal

echo "Enter Rate of Interest (%):"
read rate

echo "Enter Time (in years):"
read time

simple_interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)
total_amount=$(echo "scale=2; $principal + $simple_interest" | bc)

echo "Simple Interest: $simple_interest"
echo "Total Amount: $total_amount"
