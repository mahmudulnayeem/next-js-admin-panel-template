"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import getPagination from "@/lib/pagintaion"

interface AdminPanelPaginationProps {
  currentPage: number | string
  totalPages: number
  windowSize?: number
}
const AdminPanelPagination = ({ currentPage, totalPages, windowSize = 4 }: AdminPanelPaginationProps) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams)
      params.set("page", page.toString())
      return params.toString()
    },
    [searchParams]
  )
  currentPage = Number(currentPage)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious href={`${pathname}?${createQueryString(currentPage > 1 ? currentPage - 1 : 1)}`} />
        {getPagination({ currentPage, totalPages, windowSize }).map((page, index) => {
          if (page === "...") {
            return <PaginationEllipsis key={index} />
          }
          return (
            <PaginationItem key={index}>
              <PaginationLink href={`${pathname}?${createQueryString(page as number)}`} isActive={page === currentPage}>
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}
        <PaginationNext
          href={`${pathname}?${createQueryString(currentPage < totalPages ? currentPage + 1 : currentPage)}`}
        />
      </PaginationContent>
    </Pagination>
  )
}

export default AdminPanelPagination
