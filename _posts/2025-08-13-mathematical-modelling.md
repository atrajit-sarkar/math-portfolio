---
layout: page
title: "Mathematical Modelling"
date: 2025-08-13
categories: [mathematical modelling]
tags: []
excerpt: "Mathematical Modelling Class notes"
---

## Class Notes:
1. `Class-01:` Over view, idea and a simple problem of mathematical modelling
class note: 
code for finding the solution of the problem:
find the code also in [Github](https://github.com/atrajit-sarkar/Mathematical-Modelling/blob/main/class01.c)

```c
// Bisection method with reusable function definition via macro in the define block
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// --- Define block: customize the function here ---
// Helper macro to generate a function from an expression in x
#define DEFINE_FUNC(name, expr) \
    static inline double name(double x) { return (expr); }

// Parameter and constants used by the function expression
#ifndef c
#define c 1.5
#endif
#ifndef e
#define e 2.71828182845904523536
#endif
// Example: f(x) = x^3 - x - 2  (root near 1.52138)
DEFINE_FUNC(f, ((-9.806/c)*(((pow(e,(-c*x)))/c)+x)+10+(9.806/c)))

// Default tolerance and max iterations (can be overridden via CLI)
#ifndef TOL
#define TOL 1e-100
#endif

#ifndef MAX_ITER
#define MAX_ITER 100
#endif
// --- End define block ---

// Contract:
// - Inputs: function f, interval [a,b] with f(a)*f(b) < 0, tol > 0, max_iter > 0
// - Outputs: root via *root, iterations via *iters
// - Returns: 0 on success; 1 if no sign change; 2 if max iters; 3 invalid params
static int bisection(
    double (*fn)(double),
    double a,
    double b,
    double tol,
    int max_iter,
    double *root,
    int *iters)
{
    if (!fn || !root || !iters || tol <= 0.0 || max_iter <= 0)
    {
        return 3; // invalid params
    }

    double fa = fn(a);
    double fb = fn(b);

    // If either endpoint is exactly a root, return it
    if (fa == 0.0)
    {
        *root = a;
        *iters = 0;
        return 0;
    }
    if (fb == 0.0)
    {
        *root = b;
        *iters = 0;
        return 0;
    }

    if (fa * fb > 0.0)
    {
        return 1; // no sign change on [a,b]
    }

    int k = 0;
    double left = a, right = b;
    double mid = 0.0, fm = 0.0;

    for (k = 1; k <= max_iter; ++k)
    {
        mid = 0.5 * (left + right);
        fm = fn(mid);

        // Convergence checks: interval width or function value
        if (fabs(fm) <= tol || 0.5 * fabs(right - left) <= tol)
        {
            *root = mid;
            *iters = k;
            return 0;
        }

        // Narrow the bracket, preserving sign change
        if (fa * fm < 0.0)
        {
            right = mid;
            fb = fm;
        }
        else
        {
            left = mid;
            fa = fm;
        }
    }

    // Max iterations reached
    *root = mid;
    *iters = max_iter;
    return 2;
}

int main(int argc, char **argv)
{
    // Defaults suitable for the sample f(x)
    double a = 2.0;
    double b = 3.0;
    double tol = TOL;
    int max_iter = MAX_ITER;

    if (argc >= 3)
    {
        a = strtod(argv[1], NULL);
        b = strtod(argv[2], NULL);
    }
    if (argc >= 4)
    {
        tol = strtod(argv[3], NULL);
    }
    if (argc >= 5)
    {
        max_iter = (int)strtol(argv[4], NULL, 10);
    }

    double root = NAN;
    int iters = 0;
    int status = bisection(f, a, b, tol, max_iter, &root, &iters);

    if (status == 0)
    {
        printf("Root ~ %.12f\n", root);
        printf("Iterations: %d\n", iters);
        printf("f(root) ~ %.12g\n", f(root));
        return 0;
    }
    else if (status == 1)
    {
        fprintf(stderr, "Error: f(a) and f(b) must have opposite signs. Got f(%.6f)=%.6g, f(%.6f)=%.6g\n", a, f(a), b, f(b));
    }
    else if (status == 2)
    {
        fprintf(stderr, "Warning: Max iterations reached. Approx root ~ %.12f, f ~ %.12g\n", root, f(root));
    }
    else
    {
        fprintf(stderr, "Error: Invalid parameters. Ensure tol>0 and max_iter>0.\n");
    }
    fprintf(stderr, "Usage: %s a b [tol] [max_iter]\n", argv[0]);
    return status ? status : 0;
}

```